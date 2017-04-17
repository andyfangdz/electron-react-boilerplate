# Electron React Boilerplate (fork)

Shamelessly copied most of the code from 
[This Repository](https://github.com/chentsulin/electron-react-boilerplate).
Most of the instructions in that repository will 
apply here. I will _try_ to maintain as much feature parity
as possible.

## Major differences

- Redux and friends are not included.
  - Why? I have a personal preference for 
    [mobx](https://github.com/mobxjs/mobx). 
    Therefore, I made the decision to make the 
    boilerplate state-management-agnostic.
- React-router is not included.
  - Why? URLs are not appropriate representation 
    of desktop app states.
  - URL is part of your application state. It's necessary
    in web pages because users expect to go back to a
    particular state via the same URL. However, for
    desktop apps, there's no such requirement in
    desktop apps.
- Flow is not included.
- Tests are removed.
- Some reorganizations are made.
 
## Why not just use electron-forge?
Mainly because it does not bundle the app, leading to major
application startup time even with ASAR.
Electron-forge also does not play nicely with `npm link`ed
local packages.
Other goodies, such as webpack DLLs are also impossible with 
electron-forge.

To recap:
***The original boilerplate is massive because it has stuff you need.***
