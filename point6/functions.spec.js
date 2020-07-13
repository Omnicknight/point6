describe('createCopy ', () => {
    it('should create copy object', () => {
        let topPC2 = {
            RAM: 32,
            GC: 'RTX 2080',
            CPU: 'i7 8700k',
            power: 1000,
        }
        expect(createCopy(topPC2, topPC)).to.not.equal(topPC, topPC2);
    })
});

describe('strSum ', () => {
    it('should return sum string', () => {
        let res = 2;
        expect(strSum(topPC)).to.equal(2);
    })
});