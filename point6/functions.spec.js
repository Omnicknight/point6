describe('createMonster ', () => {
    it('should create monster object', () => {
        const monster = {
            id: 1,
            userId: 1,
            nick: 'elit',
            style: 'sniper',
            hp: 50,
        }
        expect(createMonster(1, 'elit', 'sniper', 50)).to.deep.equal(monster);
    })
});

describe('Math', () => {
    it('should do pow', () => {
        expect(1).to.equal(1);
    })
});