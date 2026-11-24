// @ts-check
// A new cape through the same registry as the base game's (ctx.cosmetics): the art is pixel-art by code (`paint`
// returns the color of ONE pixel) and the unlock is its own feat, that checks itself ON ITS OWN — like the Capa do Percurso from
// B-851. The cape goes at the END of the list: the account stores the index, so the game's 6 don't move.
import { CapeType, FeatType, ModInitializer } from './mineclaude-sdk.js';

// The feat: the account already stores the minimum depth the player reached. It only READS the account, never writes.
class DeepDig extends FeatType {
  text = 'descer abaixo de y = -40';
  test(e) {
    const fundo = e.account.get('deepestY');
    return Number.isFinite(fundo) && fundo <= -40;
  }
}

// The drawing: an ore vein in the stone — 4 px diamonds, one in each quadrant of the cape.
class VeinCape extends CapeType {
  name = 'Capa do Veio';
  feat = 'fundo';
  pattern = 'veio';
  colors = ['#4a4a52', '#49c3b0'];
  paint({ x, y, colors }) {
    const dx = Math.abs((x % 4) - 1.5), dy = Math.abs((y % 4) - 1.5);
    return dx + dy <= 1.5 ? colors[1] : colors[0];
  }
}

export default class CapaExtra extends ModInitializer {
  /** @param {import('../../packages/cli/types/mineclaude-mod').ModContext} ctx */
  onInitialize(ctx) {
    ctx.cosmetics.feat('fundo', new DeepDig()); // the feat first: the cape cites it by its short name
    ctx.cosmetics.cape('veio', new VeinCape());
  }
}
