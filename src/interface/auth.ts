export interface isAuth {
    username:string
    password:string
}


export interface IRegister {
    fullname: string;
    username: string;
    password: string;
    address: string;
    gender: string;
}

export interface Partais {
    name: string;
    nomor_urut: number;
    chairman: string;
    visionAndMission: string;
    address: string;
    picture: string;
  };

  export interface Paslon  {
    id: number;
    name: string;
    picture: string;
    serial_number: number;
    coalition: string[];
    visionAndMission: string[];
  };