

import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@cqcl/quantinuum-ui"
import { MenuIcon } from "lucide-react"
import { textLinks } from "./config"

  export const MobileMenu = () => {
    return <DropdownMenu>
    <DropdownMenuTrigger asChild><Button variant='outline' className="w-8 p-0 h-8"> <MenuIcon/></Button></DropdownMenuTrigger>
    <DropdownMenuContent>
        {textLinks.map(link => {
            return   <DropdownMenuItem asChild key={link.title}><a href={link.href}>{link.title}</a></DropdownMenuItem>
        })}
    </DropdownMenuContent>
  </DropdownMenu>
  }
