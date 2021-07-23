function population(country, pop) {
	return {
		country: country,
		pop: pop
	};
}

var india_pop = population("India", 1300e6);
var southkorea_pop = population("SouthKorea", 200e6);
var japan_pop = population("Japan", 200e6);

alert(india_pop); 

var asia_pop = india_pop + southkorea_pop + japan_pop;

alert(asia_pop); 
