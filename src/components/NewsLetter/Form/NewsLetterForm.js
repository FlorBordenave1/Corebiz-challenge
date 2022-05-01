import { useForm } from "react-hook-form"
import "./NewsLetterForm.css"

export default function NewsLetterForm({ onSubmit }) {

    const { register, formState: { errors }, handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div>
                <input
                    type="text"
                    className="form"
                    placeholder="ingresa tu mail"
                    {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    })} />
                {errors.email?.type === 'required' && <p className="form-text-error" >Por favor, ingrese su mail</p>}
                {errors.email?.type === 'pattern' && <p className="form-text-error">El formato del email es incorrecto</p>}
            </div>

            <div className="form-content-input">
                <input
                    type="text"
                    className="form"
                    placeholder="ingresa tu nombre"
                    {...register('name', {
                        required: true,
                        minLength: 5
                    })}
                />

                {errors.name?.type === 'required' && <p className="form-text-error">Por favor, ingrese su nombre</p>}
                {errors.name?.type === 'minLength' && <p className="form-text-error" >El campo debe tener al menos 5 caracteres</p>}
            </div>

            <input type="submit" value="Suscribirme" className="form-submit" />
        </form>
    )
}