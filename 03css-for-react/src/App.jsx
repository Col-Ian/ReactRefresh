/*

1. External - general css style sheet
2. Modules - avoids naming conflicts since it auto generates a hash class
3. Inline - for minimal styling

*/

import Button from "./Button/Button"

function App() {
  return (
    <>
      <Button />
    </>
    )
}

export default App
