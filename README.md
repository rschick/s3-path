# s3-path

Path-like methods for working with S3 keys.

```javascript
const path = require('s3-path');

path.basename('some/file.txt', '.txt'); // file
path.dirname('some/file.txt'); // some
path.extname('some/file.txt'); // .txt
path.resolve('base', 'dir', 'file.txt'); // base/dir/file.txt
```
