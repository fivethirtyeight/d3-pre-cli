# d3-pre-cli
Command line utility for d3-pre prerendering pipeline.

See [d3-pre](https://github.com/fivethirtyeight/d3-pre) for more detailed documentation.

## Usage

```
$ npm install -g d3-pre-cli
$ d3-pre ./path/to/index.html
```

This will modify the `index.html` file, running any scripts that are included,
letting these scripts modify the DOM and saving the modifications.
