const path = require('..');

describe('s3-path', () => {
  describe('basename', () => {
    it('should handle file extension', () => {
      path.basename('some/key.ext', '.ext').should.equal('key');
    });

    it('should handle no extension', () => {
      path.basename('some/key').should.equal('key');
    });
  });

  describe('dirname', () => {
    it('should handle file extension', () => {
      path.dirname('some/key.ext').should.equal('some');
    });

    it('should handle no extension', () => {
      path.dirname('some/key').should.equal('some');
    });
  });

  describe('extname', () => {
    it('should handle file extension', () => {
      path.extname('some/key.ext').should.equal('.ext');
    });

    it('should handle no extension', () => {
      path.extname('some/key').should.equal('');
    });
  });

  describe('resolve', () => {
    it('should resolve sub directory', () => {
      path.resolve('base/key', 'dir', 'file.ext').should.equal('base/key/dir/file.ext');
    });

    it('should handle relative paths', () => {
      path.resolve('base/dir/file.ext', '../file2.ext').should.equal('base/dir/file2.ext');
    });
  });

  describe('join', () => {
    it('should join parts', () => {
      path.join('base', 'dir', 'dir2').should.equal('base/dir/dir2');
    });

    it('should add trailing slashes', () => {
      path.join('base', 'dir', '/').should.equal('base/dir/');
    });
  });
});
