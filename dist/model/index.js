"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = exports.Cardapio = void 0;
const Cardapio_1 = __importDefault(require("./atv4/Cardapio"));
exports.Cardapio = Cardapio_1.default;
const PedidoPizza_1 = __importDefault(require("./atv4/PedidoPizza"));
exports.Pedido = PedidoPizza_1.default;
