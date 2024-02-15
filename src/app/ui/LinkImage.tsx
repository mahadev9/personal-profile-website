
import Link from "next/link";
import Image from "next/image";

export default function LinkImage(props: any) {
  return (
    <Image
      src={'/link_classic.svg'}
      alt={props.alt}
      width={15}
      height={15}
      className={`h-fit self-end pl-0.5 pb-1.5 opacity-50 ${props.className}`}
    />
  )
}
