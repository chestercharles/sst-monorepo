# sst-monorepo

#### What am I?

This repo was created to demonstrate an issue when trying to run `sst dev` in a `pnpm` monorepo that has multiple versions of SST.

#### Repro steps

After running `pnpm install`, `cd` into `apps/latest-hotness` and run `pnpm dev`. You should see an output like this:

```bash
sst-monorepo/apps/latest-hotness via  v18.17.1 on ☁️  default
❯ pnpm run dev

> latest-hotness@0.0.0 dev /Users/chester/code/sst-monorepo/apps/latest-hotness
> sst dev

SST v2.36.1  ready!

➜  App:     latest-hotness
   Stage:   ccc
   Console: https://console.sst.dev?_port=59759/local/latest-hotness/ccc

⠸  API PUBLISH_ASSETS_IN_PROGRESS
[25%] fail: Unrecognized asset type: '[object Object]'
[50%] fail: Unrecognized asset type: '[object Object]'
[75%] fail: Unrecognized asset type: '[object Object]'
|  API PUBLISH_ASSETS_COMPLETE

✖  Errors
   API UPDATE_FAILED
   stack: Failed to publish one or more assets. See the error messages above for more information.


```
