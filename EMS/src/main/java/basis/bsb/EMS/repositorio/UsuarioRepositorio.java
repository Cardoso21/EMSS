package basis.bsb.EMS.repositorio;

import basis.bsb.EMS.dominio.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends JpaRepository <Usuario,Long> {
}
