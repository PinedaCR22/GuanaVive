import { RETAHILEROS } from '../data/dataretahilero'
import FolklorTable from '../components/FolklorTable'

export default function RetahileroPage() {
  return <FolklorTable title="Retahileros de Guanacaste" data={RETAHILEROS} />
}
