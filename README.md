### Installation

1. Install dependencies

```bash
yarn install
```

2. Add

```bash
yarn add @starboardventures/hardhat-verify`
```

3. add import

```bash
import "@starboardventures/hardhat-verify
```

4. Verify

````bash
npx hardhat starboard-verify Box 0x56A723CD503EAF5297bd2ad378c6F3c83f6ec956```
````

### Compilation and deployment

1. Compile. `artifacts`, `cache`, `typechain-types` will be generated

```bash
npx hardhat compile
```

2. Deploy.

```bash
npx hardhat run scripts/deploy-box.ts --network goerli
```

### Method 1: Hardhat plugin

1.
