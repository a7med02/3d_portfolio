import Link from "next/link"
import Image from "next/image"

const Button = ({text, className, id}: {text?: string, className?: string, id?: string}) => {
  return (
    <Link onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter');
        if (target && id){
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({top, behavior: 'smooth'});
        }


    }}  className={`${className ?? ''} cta-wrapper`} href={id ?? '#contact'}>
        <div className="cta-button group">
        <div className="bg-circle "/>
        <p className="text" >{text ?? 'Contact Me'}</p>
        <div className="arrow-wrapper">
            <Image
                src={"/images/arrow-down.svg"}
                alt="Arrow down"
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