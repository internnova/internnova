import { useQuery } from "blitz"
import getIntern from "app/interns/queries/getIntern"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const useIntern = () => {
  const user = useCurrentUser()
  const [intern] = useQuery(getIntern, { where: { id: user?.id } })
  return intern
}
