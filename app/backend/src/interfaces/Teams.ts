export default interface ITeams {
  id: number,
  teamName: string,
}

export interface Teams {
  listAll(): Promise<Array<ITeams>>;
  findById(id:number): Promise<ITeams | null>
}
