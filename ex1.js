function isEven(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  //โค้ดเดิมผิดเพราะใช้เงื่อนไข === 1 แทนที่จะเป็น === 0 ทำให้ตรวจสอบเลขคี่แทนที่จะเป็นเลขคู