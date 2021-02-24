import { set } from "vue/types/umd";
import state from "./state";

export default {
	//faz o update da pokex no efeito de loading offset
	updateOffset() {
		state.offset += state.limit;
	},

	//Adiciona Pokemons na pokedex com o list infinito

	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
    },
    
    //Informa se a pokedex precisa de mais dados

    setListHasNext(flag) {
        state.listHasNext = flag;
    },

    //Informa se a pokedex terminou de buscar (fetch )os dados

    setListHasCompleted(flag) {
        state.listHasCompleted = flag;
    },

    // Informar se a pokedex teve erro na busca(fetch)

    setListHasError(flag) {
        state.setListHasError = flag;
    },

    // Resetar a pokedex para o ultimo cache e remove a informação de search

    resetList() {
        state.list = [...state.tmpList];
        state.isPokemonSearch = false;
        state.listHasError = false;
        state.searchHasError = false;
    },

};
