export interface BikelaneInfo {
  // General
  name: string,
  lat: number,
  lng: number,
  lastUpdated: {date: Date, by: string},
  address: string,
  photos: {img: string, user: {name: string, avatar: string}}[],
  comments: {text: string, user: {name: string, avatar: string}, date: Date}[],

  // Bikelanes
  bklType?: string,
  bklSteep?: string,
  bklFloor?: string,
  bklNotes?: string,
  bklInfo?: {icon: string, label: string, checked: boolean}[],
}
