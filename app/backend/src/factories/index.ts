import LoginFactory from './LoginFactory';
import TeamFactory from './TeamFactory';

const startTeamFactory = TeamFactory.make();
const startLoginFactory = LoginFactory.make();

export {
  startTeamFactory,
  startLoginFactory,
};
