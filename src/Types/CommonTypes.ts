import { RouteComponentProps } from 'react-router';

interface MatchParams {
  userId: string;
}


export interface MatchProps extends RouteComponentProps<MatchParams> {
  params : any
  location: any
  history: any
  staticContext?: any;
}

export type ModalDataType = {
    text : string  
    title? : string | null
}

type PropertiesType<T> = T extends {[key : string]: infer U} ? U : never
export type ActionTypes<T extends {[key: string] : (...args: any[]) => any}> = ReturnType<PropertiesType<T>>