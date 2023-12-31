import Trie "mo:base/Trie";
import Text "mo:base/Text";
import Map "mo:base/HashMap";

import ImageType "../model/ImageType";
import EntryType "../model/EntryType";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Prelude "mo:base/Prelude";
import Order "mo:base/Order";
import Iter "mo:base/Iter";
import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Principal "mo:base/Principal";
import List "mo:base/List";
import Prim "mo:prim";
import UserType "../model/UserType";

module EntryStoreHelper {

  type Entry = EntryType.Entry;
  type UserId = EntryType.UserId;
  type InputEntry = EntryType.InputEntry;
  type EntryStorage = EntryType.EntryStorage;
  type EntryStatus = EntryType.EntryStatus;
  type EntryId = EntryType.EntryId;
  type ListEntryItem = EntryType.ListEntryItem;
  type Key = Text;
  type SubKey = EntryType.SubKey;

  type Id = UserType.Id;
  type ListUser = UserType.ListUser;
  type Subscriber = EntryType.Subscriber;
  type ListAdminUser = UserType.ListAdminUser;

  type ImageStore = Trie.Trie<ImageId, ImageObject>;
  type ImageObject = ImageType.ImageObject;
  type ImageId = ImageType.ImageId;

  public func addNewEntry(entryStorage : EntryStorage, entry : InputEntry, entryId : EntryId, caller : UserId, isDraftUpdate : Bool, draftId : Text, articlePool : Nat, stable_categories : [Text]) : EntryStorage {

    var categories = Array.mapFilter<Text, Text>(
      entry.category,
      func(x) {
        var found = false;
        for (cat in stable_categories.vals()) {
          if (x == cat) {
            found := true;
          };
        };
        if (found) {
          ?x;
        } else {
          ?"Other";
        };
      },
    );

    // case ("AI") ?"AI";

    // case ("BlockChain") ?"BlockChain";
    // case ("Guide") ?"Guide";
    // case ("GameReview") ?"GameReview";
    // case (_) ?"Other";

    // switch (entry.category) {

    //   case ("AI") "AI";
    //   case ("BlockChain") "BlockChain";
    //   case ("Guide") "Guide";
    //   case ("GameReview") "GameReview";
    //   case (_) "Other";
    // };

    var entryStatus : EntryStatus = #pending;

    if (entry.isPromoted) {

      let oldEntry = entryStorage.get(draftId);
      switch (oldEntry) {
        case (?isEntry) {
          let mergedPromotionICP = articlePool + isEntry.promotionICP;
          let newPromotion = List.push<Int>(Time.now() / 1000000, isEntry.promotionHistory);
          let tempEntry : Entry = {
            title = isEntry.title;
            description = isEntry.description;
            image = isEntry.image;
            creation_time = isEntry.creation_time;
            user = isEntry.user;
            views = isEntry.views;
            likes = isEntry.likes;
            category = isEntry.category;
            seoTitle = isEntry.seoTitle;
            seoSlug = isEntry.seoSlug;
            viewedUsers = isEntry.viewedUsers;
            likedUsers = isEntry.likedUsers;
            seoDescription = isEntry.seoDescription;
            seoExcerpt = isEntry.seoExcerpt;
            subscription = isEntry.subscription;
            isDraft = isEntry.isDraft;
            isPromoted = entry.isPromoted;
            // promotionLikesTarget = isEntry.promotionLikesTarget;
            promotionICP = mergedPromotionICP;
            minters = isEntry.minters;
            userName = isEntry.userName;
            status = isEntry.status;
            promotionHistory = newPromotion;
            pressRelease = isEntry.pressRelease;
            imageTags = isEntry.imageTags;
          caption = isEntry.caption;
          tags = isEntry.tags;
          };
          let oldEntry = entryStorage.replace(draftId, tempEntry);
          let newEntryStorage : Map.HashMap<EntryId, Entry> = Map.fromIter<EntryId, Entry>(entryStorage.entries(), entryStorage.size(), Text.equal, Text.hash);
          return newEntryStorage;

        };
        case (null) {
          return entryStorage;
        };
      };
    } else {

      let tempEntry : Entry = {
        title = entry.title;
        description = entry.description;
        image = entry.image;
        creation_time = Time.now() / 1000000;
        user = caller;
        views = 0;
        likes = 0;
        category = categories;
        seoTitle = entry.seoTitle;
        seoSlug = entry.seoSlug;
        viewedUsers = [];
        likedUsers = [];
        seoDescription = entry.seoDescription;
        seoExcerpt = entry.seoExcerpt;
        subscription = entry.subscription;
        isDraft = entry.isDraft;
        isPromoted = false;
        // promotionLikesTarget = entry.promotionLikesTarget;
        promotionICP = 0;
        minters = [];
        userName = entry.userName;
        status = entryStatus;
        promotionHistory = List.nil<Int>();
        pressRelease = entry.pressRelease;
        imageTags = entry.imageTags;
          caption = entry.caption;
          tags = entry.tags;
      };
      if (isDraftUpdate) {
        let oldEntry = entryStorage.replace(draftId, tempEntry);
        let newEntryStorage : Map.HashMap<EntryId, Entry> = Map.fromIter<EntryId, Entry>(entryStorage.entries(), entryStorage.size(), Text.equal, Text.hash);
        return newEntryStorage;
      } else {
        entryStorage.put(entryId, tempEntry);
        let newEntryStorage : Map.HashMap<EntryId, Entry> = Map.fromIter<EntryId, Entry>(entryStorage.entries(), entryStorage.size(), Text.equal, Text.hash);
        return newEntryStorage;

      };
    };

  };
  public func sortListByLatest(array : [(Key, ListEntryItem)]) : [(Key, ListEntryItem)] {
    let compare = func((keyA : Key, a : ListEntryItem), (keyB : Key, b : ListEntryItem)) : Order.Order {
      if (a.creation_time > b.creation_time) {
        return #less;
      } else if (a.creation_time < b.creation_time) {
        return #greater;
      } else {
        return #equal;
      };
    };
    // let sortedArray = Array.sort(newArr, func((keyA : Key, a : ListEntryItem), (keyB : Key, b : ListEntryItem)) { Order.fromCompare((b.creation_time - a.creation_time)) });
    Array.sort(
      array,
      compare,
    );
  };
  public func searchSortList(array : Map.HashMap<Key, ListEntryItem>, search : Text, startIndex : Nat, length : Nat) : {
    entries : [(Key, ListEntryItem)];
    amount : Nat;
  } {
    let searchString = Text.map(search, Prim.charToLower);
    var searchedEntries = Map.HashMap<Key, ListEntryItem>(0, Text.equal, Text.hash);
    for ((key, entry) in array.entries()) {
      let title = Text.map(entry.title, Prim.charToLower);
      let user = Text.map(entry.userName, Prim.charToLower);
      var isTitleSearched = Text.contains(title, #text searchString);
      var isUserSearched = Text.contains(user, #text searchString);
      if (isTitleSearched or isUserSearched) {
        searchedEntries.put(key, entry);
      };
    };
    var searchedEntriesArray : [(Key, ListEntryItem)] = Iter.toArray(searchedEntries.entries());
    let compare = func((keyA : Key, a : ListEntryItem), (keyB : Key, b : ListEntryItem)) : Order.Order {
      if (a.isPromoted and not b.isPromoted) {
        return #less;
      } else if (b.isPromoted and not a.isPromoted) {
        return #greater;
      } else {
        if (a.creation_time > b.creation_time) {
          return #less;
        } else if (a.creation_time < b.creation_time) {
          return #greater;
        } else {
          return #equal;
        };
      };
    };
    let sortedEntries = Array.sort(
      searchedEntriesArray,
      compare,
    );
    var paginatedArray : [(Key, ListEntryItem)] = [];
    let size = sortedEntries.size();
    let amount : Nat = size - startIndex;
    let itemsPerPage = 6;
    if (size > startIndex and size > (length + startIndex) and length != 0) {
      paginatedArray := Array.subArray<(Key, ListEntryItem)>(sortedEntries, startIndex, length);
    } else if (size > startIndex and size > (startIndex + itemsPerPage)) {
      if (length != 0) {
        paginatedArray := Array.subArray<(Key, ListEntryItem)>(sortedEntries, startIndex, amount);
      } else {
        paginatedArray := Array.subArray<(Key, ListEntryItem)>(sortedEntries, startIndex, itemsPerPage);

      };

    } else if (size > startIndex and size < (startIndex + itemsPerPage) and size > itemsPerPage) {
      Debug.print(debug_show (size, startIndex, amount));
      paginatedArray := Array.subArray<(Key, ListEntryItem)>(sortedEntries, startIndex, amount);

    } else if (size > itemsPerPage) {
      paginatedArray := Array.subArray<(Key, ListEntryItem)>(sortedEntries, 0, itemsPerPage);
    } else {
      paginatedArray := sortedEntries;
    };
    return { entries = paginatedArray; amount = sortedEntries.size() };
  };
  public func searchSortUserList(array : Map.HashMap<Id, ListUser>, search : Text, startIndex : Nat, length : Nat) : {
    users : [(Id, ListUser)];
    amount : Nat;
  } {
    let searchString = Text.map(search, Prim.charToLower);
    var searchedUsers = Map.HashMap<Id, ListUser>(0, Principal.equal, Principal.hash);
    for ((key, user) in array.entries()) {
      // let title = Text.map(user.title, Prim.charToLower);
      var name = "";
      switch (user.name) {
        case (?isName) {
          name := isName;
        };
        case (null) {

        };
      };
      let userName = Text.map(name, Prim.charToLower);
      // var isTitleSearched = Text.contains(title, #text searchString);
      var isUserSearched = Text.contains(userName, #text searchString);
      if (isUserSearched) {
        searchedUsers.put(key, user);
      };
    };
    var searchedUsersArray : [(Id, ListUser)] = Iter.toArray(searchedUsers.entries());
    let compare = func((keyA : Id, a : ListUser), (keyB : Id, b : ListUser)) : Order.Order {
      if (a.joinedFrom > b.joinedFrom) {
        return #less;
      } else if (a.joinedFrom < b.joinedFrom) {
        return #greater;
      } else {
        return #equal;
      };
    };
    // let sortedArray = Array.sort(newArr, func((keyA : Id, a : ListUser), (keyB : Id, b : ListUser)) { Order.fromCompare((b.creation_time - a.creation_time)) });
    let sortedEntries = Array.sort(
      searchedUsersArray,
      compare,
    );
    // let entryArray = Iter.toArray(searchedEntries.entries());
    var paginatedArray : [(Id, ListUser)] = [];
    let itemsPerPage = 10;
    let size = sortedEntries.size();
    let amount : Nat = size - startIndex;
    if (size > startIndex and size > (length + startIndex) and length != 0) {
      paginatedArray := Array.subArray<(Id, ListUser)>(sortedEntries, startIndex, length);
    } else if (size > startIndex and size > (startIndex + itemsPerPage)) {
      if (length != 0) {
        paginatedArray := Array.subArray<(Id, ListUser)>(sortedEntries, startIndex, amount);
      } else {
        paginatedArray := Array.subArray<(Id, ListUser)>(sortedEntries, startIndex, itemsPerPage);

      };

    } else if (size > startIndex and size < (startIndex + itemsPerPage) and size > itemsPerPage) {
      Debug.print(debug_show (size, startIndex, amount));
      paginatedArray := Array.subArray<(Id, ListUser)>(sortedEntries, startIndex, amount);

    } else if (size > itemsPerPage) {
      paginatedArray := Array.subArray<(Id, ListUser)>(sortedEntries, 0, itemsPerPage);
    } else {
      paginatedArray := sortedEntries;
    };
    return { users = paginatedArray; amount = sortedEntries.size() };
  };
  public func searchSortAdminUserList(array : Map.HashMap<Id, ListAdminUser>, search : Text, startIndex : Nat, length : Nat) : {
    users : [(Id, ListAdminUser)];
    amount : Nat;
  } {
    let searchString = Text.map(search, Prim.charToLower);
    var searchedUsers = Map.HashMap<Id, ListAdminUser>(0, Principal.equal, Principal.hash);
    for ((key, user) in array.entries()) {
      // let title = Text.map(user.title, Prim.charToLower);
      var name = "";
      switch (user.name) {
        case (?isName) {
          name := isName;
        };
        case (null) {

        };
      };
      let userName = Text.map(name, Prim.charToLower);
      // var isTitleSearched = Text.contains(title, #text searchString);
      var isUserSearched = Text.contains(userName, #text searchString);
      if (isUserSearched) {
        searchedUsers.put(key, user);
      };
    };
    var searchedUsersArray : [(Id, ListAdminUser)] = Iter.toArray(searchedUsers.entries());
    let compare = func((keyA : Id, a : ListAdminUser), (keyB : Id, b : ListAdminUser)) : Order.Order {
      if (a.joinedFrom > b.joinedFrom) {
        return #less;
      } else if (a.joinedFrom < b.joinedFrom) {
        return #greater;
      } else {
        return #equal;
      };
    };
    // let sortedArray = Array.sort(newArr, func((keyA : Id, a : ListUser), (keyB : Id, b : ListUser)) { Order.fromCompare((b.creation_time - a.creation_time)) });
    let sortedEntries = Array.sort(
      searchedUsersArray,
      compare,
    );
    // let entryArray = Iter.toArray(searchedEntries.entries());
    var paginatedArray : [(Id, ListAdminUser)] = [];
    let size = sortedEntries.size();
    let itemsPerPage = 4;
    if (size > startIndex and size > (length + startIndex) and length != 0) {
      paginatedArray := Array.subArray<(Id, ListAdminUser)>(sortedEntries, startIndex, length);
    } else if (size > startIndex and size > (startIndex + itemsPerPage)) {
      paginatedArray := Array.subArray<(Id, ListAdminUser)>(sortedEntries, startIndex, itemsPerPage);

    } else if (size > startIndex and size < (startIndex + itemsPerPage) and size > itemsPerPage) {
      let amount : Nat = size - startIndex;
      Debug.print(debug_show (size, startIndex, amount));
      paginatedArray := Array.subArray<(Id, ListAdminUser)>(sortedEntries, startIndex, amount);

    } else if (size > itemsPerPage) {
      paginatedArray := Array.subArray<(Id, ListAdminUser)>(sortedEntries, 0, itemsPerPage);
    } else {
      paginatedArray := sortedEntries;
    };
    return { users = paginatedArray; amount = sortedEntries.size() };
  };
  public func sortEntriesByLatest(array : [(Key, Entry)]) : [(Key, Entry)] {
    let compare = func((keyA : Key, a : Entry), (keyB : Key, b : Entry)) : Order.Order {
      if (a.creation_time > b.creation_time) {
        return #less;
      } else if (a.creation_time < b.creation_time) {
        return #greater;
      } else {
        return #equal;
      };
    };
    // let sortedArray = Array.sort(newArr, func((keyA : Key, a : ListEntryItem), (keyB : Key, b : ListEntryItem)) { Order.fromCompare((b.creation_time - a.creation_time)) });
    Array.sort(
      array,
      compare,
    );
  };
  public func paginateEntriesByLatest(array : [(Key, Entry)], startIndex : Nat, length : Nat) : {
    entries : [(Key, Entry)];
    amount : Nat;
  } {
    let compare = func((keyA : Key, a : Entry), (keyB : Key, b : Entry)) : Order.Order {
      if (a.creation_time > b.creation_time) {
        return #less;
      } else if (a.creation_time < b.creation_time) {
        return #greater;
      } else {
        return #equal;
      };
    };
    // let sortedArray = Array.sort(newArr, func((keyA : Key, a : ListEntryItem), (keyB : Key, b : ListEntryItem)) { Order.fromCompare((b.creation_time - a.creation_time)) });
    let sortedEntries = Array.sort(
      array,
      compare,
    );
    var paginatedArray : [(Key, Entry)] = [];
    let size = sortedEntries.size();
    let amount : Nat = size - startIndex;
    let itemsPerPage = 3;
    if (size > startIndex and size > (length + startIndex) and length != 0) {
      paginatedArray := Array.subArray<(Key, Entry)>(sortedEntries, startIndex, length);
    } else if (size > startIndex and size > (startIndex + itemsPerPage)) {
      if (length != 0) {
        paginatedArray := Array.subArray<(Key, Entry)>(sortedEntries, startIndex, amount);
      } else {
        paginatedArray := Array.subArray<(Key, Entry)>(sortedEntries, startIndex, itemsPerPage);

      };

    } else if (size > startIndex and size < (startIndex + itemsPerPage) and size > itemsPerPage) {
      Debug.print(debug_show (size, startIndex, amount));
      paginatedArray := Array.subArray<(Key, Entry)>(sortedEntries, startIndex, amount);

    } else if (size > startIndex) {
      paginatedArray := Array.subArray<(Key, Entry)>(sortedEntries, startIndex, amount);

    } else if (size > itemsPerPage) {
      paginatedArray := Array.subArray<(Key, Entry)>(sortedEntries, 0, itemsPerPage);
    } else {
      paginatedArray := sortedEntries;
    };
    return { entries = paginatedArray; amount = sortedEntries.size() };
  };
  public func paginateSubscribersByLatest(array : [Subscriber], startIndex : Nat, length : Nat) : {
    entries : [Subscriber];
    amount : Nat;
  } {
    let compare = func(a : Subscriber, b : Subscriber) : Order.Order {
      if (a.subscribed_on > b.subscribed_on) {
        return #less;
      } else if (a.subscribed_on < b.subscribed_on) {
        return #greater;
      } else {
        return #equal;
      };
    };
    // let sortedArray = Array.sort(newArr, func((keyA : Key, a : ListSubscriberItem), (keyB : Key, b : ListSubscriberItem)) { Order.fromCompare((b.creation_time - a.creation_time)) });
    let sortedEntries = Array.sort(
      array,
      compare,
    );
    var paginatedArray : [Subscriber] = [];
    let size = sortedEntries.size();
    let amount : Nat = size - startIndex;
    let itemsPerPage = 11;
    if (size > startIndex and size > (length + startIndex) and length != 0) {
      paginatedArray := Array.subArray<Subscriber>(sortedEntries, startIndex, length);
    } else if (size > startIndex and size > (startIndex + itemsPerPage)) {
      if (length != 0) {
        paginatedArray := Array.subArray<Subscriber>(sortedEntries, startIndex, amount);
      } else {
        paginatedArray := Array.subArray<Subscriber>(sortedEntries, startIndex, itemsPerPage);

      };

    } else if (size > startIndex and size < (startIndex + itemsPerPage) and size > itemsPerPage) {
      Debug.print(debug_show (size, startIndex, amount));
      paginatedArray := Array.subArray<Subscriber>(sortedEntries, startIndex, amount);

    } else if (size > startIndex) {
      paginatedArray := Array.subArray<Subscriber>(sortedEntries, startIndex, amount);

    } else if (size > itemsPerPage) {
      paginatedArray := Array.subArray<Subscriber>(sortedEntries, 0, itemsPerPage);
    } else {
      paginatedArray := sortedEntries;
    };
    return { entries = paginatedArray; amount = sortedEntries.size() };
  };

};
