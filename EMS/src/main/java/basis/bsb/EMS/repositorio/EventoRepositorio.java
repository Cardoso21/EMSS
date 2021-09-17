package basis.bsb.EMS.repositorio;

import basis.bsb.EMS.dominio.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepositorio extends JpaRepository<Evento,Long> {

}
