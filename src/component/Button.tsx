import Link from "next/link"
import Image from "next/image"

const Button = ({text, className, id}: {text?: string, className?: string, id?: string}) => {
  return (
    <Link className={`${className ?? ''} cta-wrapper`} href={id ?? '#contact'}>
        <div className="cta-button group">
        <div className="bg-circle "/>
        <p className="text" >{text ?? 'Contact Me'}</p>
        <div className="arrow-wrapper">
            <Image
                src={"/images/arrow-right.svg"}
                alt="Arrow Right"
                width={24}
                height={24}
                className="arrow"
            />
        </div>
        </div>
            

    </Link >
  )
}

export default Button