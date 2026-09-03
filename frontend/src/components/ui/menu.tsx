import { NavigationMenu as MenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { FiChevronDown } from "react-icons/fi"

function Menu({
  align = "start",
  className,
  children,
  ...props
}: MenuPrimitive.Root.Props &
  Pick<MenuPrimitive.Positioner.Props, "align">) {
  return (
    <MenuPrimitive.Root
      data-slot="menu"
      className={cn(
        "group/menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <MenuPositioner align={align} />
    </MenuPrimitive.Root>
  )
}

function MenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenuPrimitive.List>) {
  return (
    <MenuPrimitive.List
      data-slot="menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      )}
      {...props}
    />
  )
}

function MenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenuPrimitive.Item>) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const menuTriggerStyle = cva(
  "group/menu-trigger inline-flex h-9 w-max cursor-pointer items-center justify-center gap-1 rounded-md px-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-open:text-foreground data-popup-open:text-foreground"
)

function MenuTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menu-trigger"
      className={cn(menuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <FiChevronDown className="relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/menu-trigger:rotate-180 group-data-open/menu-trigger:rotate-180" aria-hidden="true" />
    </MenuPrimitive.Trigger>
  )
}

function MenuContent({
  className,
  ...props
}: MenuPrimitive.Content.Props) {
  return (
    <MenuPrimitive.Content
      data-slot="menu-content"
      className={cn(
        "data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto p-1 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/menu:rounded-2xl group-data-[viewport=false]/menu:border group-data-[viewport=false]/menu:border-white/30 group-data-[viewport=false]/menu:bg-white/20 group-data-[viewport=false]/menu:text-popover-foreground group-data-[viewport=false]/menu:shadow-md group-data-[viewport=false]/menu:backdrop-blur-2xl group-data-[viewport=false]/menu:duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=menu-link]:focus:ring-0 **:data-[slot=menu-link]:focus:outline-none group-data-[viewport=false]/menu:data-open:animate-in group-data-[viewport=false]/menu:data-open:fade-in-0 group-data-[viewport=false]/menu:data-open:zoom-in-95 group-data-[viewport=false]/menu:data-closed:animate-out group-data-[viewport=false]/menu:data-closed:fade-out-0 group-data-[viewport=false]/menu:data-closed:zoom-out-95",
        className
      )}
      {...props}
    />
  )
}

function MenuPositioner({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: MenuPrimitive.Positioner.Props) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0",
          className
        )}
        {...props}
      >
        <MenuPrimitive.Popup className="data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-2xl border border-white/30 bg-white/20 text-popover-foreground shadow-md backdrop-blur-2xl transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0">
          <MenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function MenuLink({
  className,
  ...props
}: MenuPrimitive.Link.Props) {
  return (
    <MenuPrimitive.Link
      data-slot="menu-link"
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=menu-content]:rounded-md [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function MenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof MenuPrimitive.Icon>) {
  return (
    <MenuPrimitive.Icon
      data-slot="menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </MenuPrimitive.Icon>
  )
}

export {
  Menu,
  MenuContent,
  MenuIndicator,
  MenuItem,
  MenuLink,
  MenuList,
  MenuTrigger,
  menuTriggerStyle,
  MenuPositioner,
}
