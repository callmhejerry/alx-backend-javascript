import Classroom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const class1 = new Classroom(19);
  const class2 = new Classroom(20);
  const class3 = new Classroom(34);

  rooms.push(class1);
  rooms.push(class2);
  rooms.push(class3);

  return rooms;
}
