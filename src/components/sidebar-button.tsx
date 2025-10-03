"use client"

import { Calendar, HomeIcon, LogIn, LogInIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "@/app/_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { signIn, signOut, useSession } from "next-auth/react"
import { Sign } from "crypto"
import SignInDialog from "./sign-in-dialog"

const SidebarButton = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }
  const handleLogoutClick = async () => {
    await signOut()
  }
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* usuario */}
      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} alt="Corte Certo" />
            </Avatar>
            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bol">Olá, faça seu login</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"}>
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
      {/* opções do menu */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-1" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/bookings">
            <Calendar size={18} />
            Agendamentos
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-1" variant="ghost" asChild>
              <Link href={`/barbershops?search=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  height={18}
                  width={18}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}

        {/*VERIFICA SE TEM USUARIO PARA ESCONDER O BOTAO DE SAIR*/}
      </div>
      {data?.user ? (
        <div className="flex flex-col gap-2 py-5">
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      ) : null}
    </SheetContent>
  )
}

export default SidebarButton
