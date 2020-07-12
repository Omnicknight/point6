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

// describe('Math', () => {
//     it('should do pow', () => {
//         expect(1).to.equal(1);
//     })
// });