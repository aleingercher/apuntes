## Pokemones (20)
```sql
CREATE TABLE Pokemon (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type1 VARCHAR(20) NOT NULL,
    type2 VARCHAR(20),
    hp INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    special_attack INT NOT NULL,
    special_defense INT NOT NULL,
    speed INT NOT NULL
);

INSERT INTO Pokemon (id, name, type1, type2, hp, attack, defense, special_attack, special_defense, speed)
VALUES
(1, 'Bulbasaur', 'Grass', 'Poison', 45, 49, 49, 65, 65, 45),
(2, 'Charmander', 'Fire', NULL, 39, 52, 43, 60, 50, 65),
(3, 'Squirtle', 'Water', NULL, 44, 48, 65, 50, 64, 43),
(4, 'Pikachu', 'Electric', NULL, 35, 55, 30, 50, 40, 90),
(5, 'Jigglypuff', 'Normal', 'Fairy', 115, 45, 20, 45, 25, 20),
(6, 'Vaporeon', 'Water', NULL, 130, 65, 60, 110, 95, 65),
(7, 'Dragonite', 'Dragon', 'Flying', 91, 134, 95, 100, 100, 80),
(8, 'Gyarados', 'Water', 'Flying', 95, 125, 79, 60, 100, 81),
(9, 'Mewtwo', 'Psychic', NULL, 106, 110, 90, 154, 90, 130),
(10, 'Chikorita', 'Grass', NULL, 45, 49, 65, 49, 65, 45),
(11, 'Cyndaquil', 'Fire', NULL, 39, 52, 43, 60, 50, 65),
(12, 'Totodile', 'Water', NULL, 50, 65, 64, 44, 48, 43),
(13, 'Mudkip', 'Water', NULL, 50, 70, 50, 50, 50, 40),
(14, 'Torchic', 'Fire', NULL, 45, 60, 40, 70, 50, 45),
(15, 'Treecko', 'Grass', NULL, 40, 45, 35, 65, 55, 70),
(16, 'Piplup', 'Water', NULL, 53, 51, 53, 61, 56, 40),
(17, 'Turtwig', 'Grass', NULL, 55, 68, 64, 45, 55, 31),
(18, 'Chimchar', 'Fire', NULL, 44, 58, 44, 58, 44, 61),
(19, 'Snivy', 'Grass', NULL, 45, 45, 55, 45, 55, 63),
(20, 'Oshawott', 'Water', NULL, 55, 55, 45, 63, 45, 45);

# select * from Pokemon
# order by case when name like 'Ji%' then hp 
# 				when name like 'Pi%' then defense
# 				else attack end

```