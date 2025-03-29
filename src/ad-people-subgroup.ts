import {
  AdExpect,
  AdModule,
  AdModules,
  AdRegBased,
  AdRegister,
  AdRegistier,
  AdTools,
} from "admister";
import { Qine } from "qin_case";

const base = Qine.qinpel.window.loadConfig(Qine.qinpel.ours.consts.QIN_BASE_SELECTED);

export const registry = AdModules.PEOPLE_SUBGROUP.registry;

export const registier: AdRegistier = { base, registry };

export const regBased: AdRegBased = {
    registier,
    joins: [
        {
            module: AdModules.PEOPLE_GROUP,
            alias: "people_group",
            filters: [{ linked: { name: "grupo", with: "codigo" } }],
        },
    ],
};

export class AdPeopleSubGroup extends AdRegister {
    public constructor(module: AdModule, expect: AdExpect) {
        super(module, expect, regBased);
        this.addField(AdTools.newAdFieldString("grupo", "Grupo - Cód.", 4).putKey());
        this.addField(AdTools.newAdFieldString("people_group.nome", "Grupo - Nome", 60));
        this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
        this.addField(AdTools.newAdFieldAtivo());
        this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
        this.prepare();
    }
}
