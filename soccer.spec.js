describe('Test for the soccer game', () => {
    it('should calculate total points correctly', () => {
      expect(getTotalPoints('wwdlw')).toEqual(10); // 3 + 3 + 1 + 0 + 3 = 10
      expect(getTotalPoints('ldld')).toEqual(2);  // 0 + 1 + 0 + 1 = 2

    });
  });
  
  describe('Test for the soccer game', () => {
    it('should order teams correctly', () => {
      const team1 = { name: 'Sounders', results: 'wwlwdd' }; // 3 +3 + 0 + 3 + 1 + 1  = 11
      const team2 = { name: 'Galaxy', results: 'ldldww' }; // 0 + 1 + 0 + 1 + 3 + 3 = 8
      const team3 = { name: 'Timbers', results: 'ddwdll' }; // 1 + 1 + 3 + 1 + 0 + 0 = 6
  
      const result = orderTeams(team1, team2, team3);
  
      // Assuming orderTeams returns a string, you might need to adjust the following based on the actual return value
      expect(result).toEqual('Sounders: 11\nGalaxy: 8\nTimbers: 6');
    });
  });