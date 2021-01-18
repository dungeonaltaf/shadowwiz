# What is this?


Creates shadows for image elements.
Auto detects the color of your image and creates a shadow.


# Installation

`npm - shadowwiz --save`

Then...

```
import {shadowwiz} from 'shadowwiz';
shadowwiz({
  shadow_type: 'soft'
  padding: 'false'
});
```

## Options


Shadowwiz supports 2 optionsm both of which are optional:


* *shadow_type* - _hard / soft_ (Defaults to soft)
* *padding*- _boolean_ (Defaults to false)
