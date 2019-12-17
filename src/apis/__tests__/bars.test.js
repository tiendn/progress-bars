import { getBars } from '../bars';

it('test api failed', async () => {
  return getBars()
    .then(data => {
      expect(data).not.toBeNull();
    })
    .catch(err => {
      expect(err.message).not.toBeNull();
    });
});
