import { forwardRef } from 'react'
import { IField } from './form.interface'
import cn from 'classnames'
import styles from './form.module.scss'
const Field = forwardRef<HTMLInputElement, IField>(
	({ plaholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{plaholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

export default Field
