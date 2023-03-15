let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {
    while(list) {
      console.log(list.value);
      list = list.next;
    }
  }
  

  function printlist(list) {
    console.log(list.value);
      if (list.next) {
          printlist(list.next);
      }
  }

  console.log(printlist(list));