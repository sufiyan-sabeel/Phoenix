# PHOENIX Termux APT Repository

## How to add this repository

```bash
pkg install curl
curl -sL https://raw.githubusercontent.com/sufiyan-sabeel/Phoenix/main/scripts/add-repo.sh | bash
```

Or manually:

```bash
echo "deb https://sufiyan-sabeel.github.io/Phoenix stable main" > $PREFIX/etc/apt/sources.list.d/phoenix.list
pkg update
pkg install phoenix
```

## Install PHOENIX

```bash
pkg update
pkg install phoenix
phoenix
```

## Requirements

- Termux (latest version from F-Droid)
- Python 3.8+

## Links

- [GitHub Repository](https://github.com/sufiyan-sabeel/Phoenix)
- [Issues](https://github.com/sufiyan-sabeel/Phoenix/issues)
