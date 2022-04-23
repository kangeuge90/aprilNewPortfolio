official site:
https://connoratherton.com/loaders

file Path:
nodemodules/loaders.css/src/animations

ball-beat.scss
ball-clip-rotate-multiple.scss
ball-clip-rotate-pulse.scss
ball-clip-rotate.scss
ball-grid-beat.scss
ball-grid-pulse.scss
ball-pulse-rise.scss
ball-pulse-round.scss
ball-pulse-sync.scss
ball-pulse.scss
ball-scale-multiple.scss
ball-scale-random.scss
ball-scale-ripple-multiple.scss
ball-scale-ripple.scss
ball-scale.scss
bakk-spin-fade-loader.scss
ball-splin-loader.scss
ball-triangle-trace.scss
ball-zig-zag-deflect.scss
ball-zig-zag.scss
cube-transition.scss
line-scale-pulse-out-rapid.scss
line-scale-pulse-out.scss
line-scale-random.scss
line-scale.scss
line-spin-fade-loader.scss
pacman.scss
semi-circle-spin.scss
square-spin.scss
triangle-skew-spin.scss

Guide:
in code:
<Loader type='pacman' />
import { Loader } from 'react-loaders';

then
in App.scss:
@import '~loaders.css/src/animations/pacman.scss';

use loader-active class to position correctly
(this is preset name)
i.e.-------
.loader-active {

}
-----------