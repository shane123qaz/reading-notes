# Babel

## Presets
- some for common environments.
    - @babel/preset-env
    - @babel/preset-flow
    - @babel/preset-react
    - @babel/preset-typescript
- the order in presets is reversed
  ```json
  {
      "presets": [
          "es2015",
          "react",
          "stage-2"
      ]
  }
  ```

## Plugins