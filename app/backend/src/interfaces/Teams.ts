export default interface tipoTeams {
  id: number,
  teamName: string,
}

export interface Teams {
  listAll(): Promise<Array<tipoTeams>>;
  findById(id:number): Promise<tipoTeams | null>
}
