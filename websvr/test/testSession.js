var test = function(msg, func, repeat) {
  var t1 = new Date();

  repeat = repeat || 1000000;

  for (var i = 0; i < repeat; i++) {
    func();
  }

  var t2 = new Date();

  console.log("time used:" , t2 - t1, ", ", msg);
};

var create = function() {
  //Time stamp, change interval is 18.641 hours, higher 6 bits will be kept, this is used for delete the old sessions
  var uuid 
    = ((+new Date()) / 60000 | 0)           //Time stamp, change interval is 1 min, 8 chars
    + '-'
    + ((Math.random() * 0x4000000 | 0))    //Random 1: Used for distinguish the session, max 9 chars
    + ((Math.random() * 0x4000000 | 0));   //Random 2: Used for distinguish the session, max 9 chars

  //fix the length to 25
  //uuid += '0000000000'.substr(0, 25 - uuid.length);

  return uuid;
};

test("SessionManager.create: test length", function() {

  var max = 0, min = 1000;
  for (var i = 0; i < 1000000; i ++) {
    var len = create().length;

    (len > max) && (max = len);
    (len < min) && (min = len);
  }

  console.log("min:", min, "max:", max);

}, 1);