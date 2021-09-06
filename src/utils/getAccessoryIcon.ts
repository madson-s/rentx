import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import ExchangeSvg from '../assets/exchange.svg';
import ForceSvg from '../assets/force.svg';
import SpeedSvg from '../assets/speed.svg';
import PeopleSvg from '../assets/people.svg';

const accessoriesIcons = {
  'acceleration': AccelerationSvg,
  'electric_motor': EnergySvg,
  'exchange': ExchangeSvg,
  'gasoline_motor': GasolineSvg,
  'hybrid_motor': HybridSvg,
  'seats': PeopleSvg,
  'speed': SpeedSvg,
  'turning_diameter': ForceSvg,
}

export function getAccessoryIcon(type: string) {
  console.log(type);
  return accessoriesIcons[type];
}
