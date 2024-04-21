/// <reference types="cypress" />
const categoryPokemons = [
  {
    name: "Normal",
    pokemons: ["pidgey"],
  },
  {
    name: "Fire",
    pokemons: ["Charmander"],
  },
  {
    name: "Water",
    pokemons: ["squirtle"],
  },
  {
    name: "Grass",
    pokemons: ["gloom"],
  },
  {
    name: "Flying",
    pokemons: ["charizard"],
  },
  {
    name: "Fighting",
    pokemons: ["mankey"],
  },
  {
    name: "Poison",
    pokemons: ["weedle"],
  },
  {
    name: "Electric",
    pokemons: ["magneton", ,],
  },
  {
    name: "Ground",
    pokemons: ["Sandshrew"],
  },
  {
    name: "Rock",
    pokemons: ["Geodude"],
  },
  {
    name: "Psychic",
    pokemons: ["Abra"],
  },
  {
    name: "Ice",
    pokemons: ["Dewgong"],
  },
  {
    name: "Bug",
    pokemons: ["Caterpie"],
  },
  {
    name: "Ghost",
    pokemons: ["Gastly"],
  },
  {
    name: "Steel",
    pokemons: ["Magnemite"],
  },
  {
    name: "Dragon",
    pokemons: ["Dragonair"],
  },
  {
    name: "Dark",
    pokemons: ["Umbreon"],
  },
  {
    name: "Fairy",
    pokemons: ["Clefairy"],
  },
];

const visitHomePage = () => {
  cy.visit("http://localhost:3000/");
};

const searchPokemon = (pokemonName) => {
  cy.get("[data-testid=results-search-input]")
    .clear()
    .type(`${pokemonName}{enter}`);
};

const verifyPokemonExists = (pokemonName) => {
  cy.get(`[data-testid=pokemon-${pokemonName.toLowerCase()}]`).should(
    "have.text",
    pokemonName.toLowerCase()
  );
};

describe("Pokemon app", () => {
  beforeEach(() => {
    visitHomePage();
  });

  it("should display all Pokemon categories on initial page load", () => {
    categoryPokemons.forEach(({ name: category }) => {
      cy.get(`[data-testid=category-button-${category.toLowerCase()}]`).should(
        "have.text",
        category.toLowerCase()
      );
    });
  });

  it("should show all pokemons by category when you click on the category", () => {
    categoryPokemons.forEach(({ name, pokemons }) => {
      cy.get(`[data-testid=category-button-${name.toLowerCase()}]`).should(
        "have.text",
        name.toLowerCase()
      );
      cy.get(`[data-testid=category-button-${name.toLowerCase()}]`).click();
      cy.get(`[data-testid=category-title-${name.toLowerCase()}]`, {
        timeout: 10000,
      }).should("be.visible");

      const categoryPokemon = pokemons[0];
      searchPokemon(categoryPokemon);
      verifyPokemonExists(categoryPokemon);
      cy.get(`[data-testid=pokemon-${categoryPokemon.toLowerCase()}]`).click();
      cy.get(
        `[data-testid=pokemon-stats-${categoryPokemon.toLowerCase()}]`
      ).should("be.visible");
    });
  });

  it("should click in one of the Pokemon and see the Pokemon basic information and statuses in a graph", () => {
    categoryPokemons.forEach(({ name, pokemons }) => {
      cy.get(`[data-testid=category-button-${name.toLowerCase()}]`).should(
        "have.text",
        name.toLowerCase()
      );
      cy.get(`[data-testid=category-button-${name.toLowerCase()}]`).click();
      cy.get(`[data-testid=category-title-${name.toLowerCase()}]`, {
        timeout: 10000,
      }).should("be.visible");

      const categoryPokemon = pokemons[0];
      searchPokemon(categoryPokemon);
      verifyPokemonExists(categoryPokemon);
    });
  });

  it("should show initial page be able to search for a specific Pokemon and filter", () => {
    const term = "bulbas";
    searchPokemon(term);
    verifyPokemonExists("bulbasaur");
  });

  it("should show initial page be able to search and show no results", () => {
    const term = "zzzzzz";
    searchPokemon(term);
    cy.get("[data-testid=no-search-results]").should(
      "have.text",
      "No pokemons found!"
    );
  });

  it("should show  the same Pokemon in different categories/types if it has two or more categories/types", () => {
    const name = "dewgong";
    ["water", "ice"].forEach((includedType) => {
      const selectedType = `[data-testid=category-button-${includedType.toLowerCase()}]`;
      cy.get(selectedType).click();
      cy.get(`[data-testid=category-title-${includedType.toLowerCase()}]`, {
        timeout: 10000,
      }).should("be.visible");

      searchPokemon(name);
      verifyPokemonExists(name);
    });
  });
});
