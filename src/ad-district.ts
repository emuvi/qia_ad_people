import {
  AdExpect,
  AdModule,
  AdModules,
  AdRegBased,
  AdRegister,
  AdRegistry,
  AdTools,
} from "admister";
import { Qine } from "qin_case";

const base = Qine.qinpel.window.loadConfig(Qine.qinpel.ours.consts.QIN_BASE_SELECTED);

export const tableHead = AdModules.DISTRICT.tableHead;

export const registry: AdRegistry = { base, tableHead };

const regBased: AdRegBased = {
    registry,
    joins: [
        {
            module: AdModules.CITY,
            alias: "city",
            filters: [{ linked: { name: "cidade", with: "codigo" } }],
        },
    ],
};

export class AdDistrict extends AdRegister {
    public constructor(module: AdModule, expect: AdExpect) {
        super(module, expect, regBased);
        this.addField(AdTools.newAdFieldString("cidade", "Cidade - Cód.", 6).putKey());
        this.addField(AdTools.newAdFieldString("city.nome", "Cidade - Nome", 60));
        this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
        this.addField(AdTools.newAdFieldAtivo());
        this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
        this.prepare();
    }
}
