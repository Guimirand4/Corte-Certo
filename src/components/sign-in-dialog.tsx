import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"

const SignIndDialog = () => {
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>
      <Button
        variant={"outline"}
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image src={"/google.svg"} alt={"google"} width={18} height={18} />
        Google
      </Button>
    </>
  )
}

export default SignIndDialog
