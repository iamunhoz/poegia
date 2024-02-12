import UIComponentsCatalog from "./UIComponentsCatalog"
import { GreenBoard } from "src/components/GreenBoard"
import { ButtonPixelGamer } from "src/components/ButtonPixelGamer"

export default function Tests() {
  return (
    <>
      <GreenBoard>
        <ButtonPixelGamer label="Gerar" />
      </GreenBoard>
      {true && <UIComponentsCatalog />}
    </>
  )
}
