import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toastError } from '@/utils/toastError'
import { getKeys } from '@/utils/object/getKeys'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@/config/url.config'
import { IActorEditInput } from './actorEdit.interface'
import { ActorService } from '@/services/actor.service'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { push, query } = useRouter()

	const actorId = String(query.id)
	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (err) => {
				toastError(err, 'Get actor')
			},
			enabled: !!query.id,
		}
	)
	const { mutateAsync } = useMutation(
		['update actor'],
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			onSuccess: () => {
				toastr.success('Update actor', 'update was successful')

				push(getAdminUrl('actors'))
			},
			onError: (err) => {
				toastError(err, 'Update actor')
			},
		}
	)
	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
