+++
title="Useful Bash Commands"
date=2020-04-26
draft=true
[taxonomies]
tags=["bash"]
+++

### Checking temperatures from internal sensors

```bash
watch -n 2 sensors
```

### Scrub styling markup from `.rtf` files

Used to scrub styling markup so the files are readable in VS Code.

```bash
find ./ -name '*.rtf' -exec Ted --saveTo {} {}.txt \;
```

### Recursively deleting all files that match a certain pattern

```bash
find -name '*.rtf' -delete
```
