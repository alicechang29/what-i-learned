### Immutable = no mutations, no changes
- once something is declared, it will never be changed 
- In order to change it, a new version of the thing will need to be created 

### Idempotent 
- When changes are applied ==multiple== times, the state is mutated only ==once==

Cannot have something that is both immutable AND have idempotent actions done to it 
